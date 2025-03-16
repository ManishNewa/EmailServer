import EmailService from "../services/email.service.js";

const emailService = new EmailService();

class EmailController {
    async sendEmail(req, res) {
        try {
            const { appName, email, subject, emailBody } = req.body;

            const response = await emailService.sendEmail({
                to: email,
                subject,
                emailBody,
                appName
            })
            return res.status(200).json(response)

        } catch (error) {
            return res.status(400).json({ error: `Something went wrong::${error}` });
        }
    }
}

export default new EmailController();