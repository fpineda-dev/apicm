const { mail } = require('../utils/sendmail');

async function sendMail(req, res) {
  const {
    SENDFROM,
    SENDTO,
    SENDSUBJECT,
    TEXTBODY,
  } = req.body;
  console.log(`Param Id: ${req.body}`);
  const result = await mail(
    SENDFROM,
    SENDTO,
    SENDSUBJECT,
    TEXTBODY,
  );
  res.status(200).json({ data: `${JSON.stringify(result)}` });
}

module.exports = {
  sendMail,
};
