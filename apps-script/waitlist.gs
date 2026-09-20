// Google Apps Script — receives waitlist signups and appends them to the sheet.
// Setup: see the steps in the chat / README. Deploy as a Web app that runs as "Me"
// and is accessible to "Anyone", then paste the /exec URL into VITE_WAITLIST_URL.

const SHEET_NAME = "Waitlist";
// Where signup alerts go. Leave blank to email whoever owns this script.
const NOTIFY_EMAIL = "";
const HEADERS = ["Timestamp", "Name", "Email", "Phone", "Area", "Move timeframe", "Package"];

function doPost(e) {
  const lock = LockService.getScriptLock();
  lock.waitLock(10000);
  try {
    const data = JSON.parse(e.postData.contents);
    if (data.company) return json({ ok: true }); // honeypot: bots fill this in

    const ss = SpreadsheetApp.getActiveSpreadsheet();
    const sheet = ss.getSheetByName(SHEET_NAME) || ss.insertSheet(SHEET_NAME);
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(HEADERS);
      sheet.setFrozenRows(1);
      sheet.getRange(1, 1, 1, HEADERS.length).setFontWeight("bold");
    }
    sheet.appendRow([
      new Date(),
      clean(data.name),
      clean(data.email),
      clean(data.phone),
      clean(data.area),
      clean(data.timeframe),
      clean(data.package),
    ]);
    notify(data);
    return json({ ok: true });
  } catch (err) {
    return json({ ok: false, error: String(err) });
  } finally {
    lock.releaseLock();
  }
}

// A failed email must never lose the signup, so this runs after the row is saved.
function notify(data) {
  try {
    const to = NOTIFY_EMAIL || Session.getEffectiveUser().getEmail();
    const body = [
      "New Maui Moving Boxes waitlist signup:",
      "",
      "Name: " + data.name,
      "Email: " + data.email,
      "Phone: " + (data.phone || "—"),
      "Area: " + data.area,
      "Move timeframe: " + data.timeframe,
      "Package: " + data["package"],
      "",
      "All signups: " + SpreadsheetApp.getActiveSpreadsheet().getUrl(),
    ].join("\n");
    MailApp.sendEmail({
      to: to,
      subject: "New waitlist signup: " + clean(data.name),
      body: body,
      replyTo: String(data.email || ""),
    });
  } catch (err) {
    console.error("Notification email failed: " + err);
  }
}

// Stops a value like =HYPERLINK(...) from being run as a formula in the sheet.
function clean(v) {
  const s = String(v == null ? "" : v).slice(0, 500);
  return /^[=+\-@]/.test(s) ? "'" + s : s;
}

function json(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(
    ContentService.MimeType.JSON,
  );
}
