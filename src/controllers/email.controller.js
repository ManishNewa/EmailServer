import EmailService from "../services/email.service.js";

const emailService = new EmailService();

class EmailController {
    async sendEmail(req, res) {
        try {
            const { appName, email, subject, emailBody } = req.body;

            await emailService.sendEmail({
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