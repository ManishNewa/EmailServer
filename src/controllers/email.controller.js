import EmailService from "../services/email.service.js";

class EmailController {
    async sendEmail(req, res) {
        try {
            const { appName, email, subject, emailBody } = req.body;

            await EmailService.sendEmail({
                to: email,
                subject,
                emailBody,
                appName
            })
        } catch (error) {
            return res.status(400).json({ error: `Something went wrong::${error}` });
        }
    }
}

export default new EmailController();