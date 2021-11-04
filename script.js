// Original author: Lucas Vance (https://github.com/LucasVance)

// To run the funcion, type in the person's email in the part where it says "address@gmail.com", and type whatever you want to say in the part where it says "BODY TEXT"

function spamPerson() {
  var targetAddress = "" // Put address between those quotes
  var num =  // Put number of emails here between quotes
  var subject = "" // Put subject line of email between these quotes
  var bodyText = "" // Body text of emails goes here

  // Loops the script x many times.
  for (var i = 1; i <= num; i++) {
    // Creates the annoying email
    GmailApp.createDraft(targetAddress, subject + " email no. " + i, bodyText);
    Logger.log(`Created ${i} emails.`)
  };

  Logger.log(`Done creating ${num} emails.`);

  for (var i = 0; i < num; i++) {
    // Grabs the draft
    var draft = GmailApp.getDrafts()[0];

    // Sends it
    var msg = draft.send();

    // Deletes the message, but only on your end
    //var msg = msg.moveToTrash();

    Logger.log(`${i} emails sent so far.`)
  }
}
