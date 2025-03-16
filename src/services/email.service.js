import EmailConfig from '../config/email';
import { emailTemplate } from '../utils/email-templates';


class EmailService {
    constructor() {
        try {
            this.emailTemplate = emailTemplate;
        } catch (error) {
            throw new Error(
                `Failed to load email template: ${error instanceof Error ? error.message : error}`,
            );
        }
    }

    // Method to replace placeholders in the email template
    replaceTemplatePlaceholders(data) {
        let emailContent = this.emailTemplate;

        emailContent = emailContent.replace('{{APP_NAME}}', data.appName);

        if (data.emailBody) {
            emailContent = emailContent.replace('{{emailBody}}', data.emailBody);
        } else {
            throw new Error('Email body is required.');
        }

        return emailContent;
    }

    // Method to send an email
    async sendEmail({ to, subject, emailBody }) {
        try {
            // Replace placeholders in the template
            const emailContent = this.replaceTemplatePlaceholders({ emailBody });

            // Set up email options
            const mailOptions = {
                from: process.env.EMAIL_USER, // Sender address
                to, // Recipient address
                subject, // Subject of the email
                html: emailContent,
            };

            // Send email
            const info = await EmailConfig.sendEmail(mailOptions);
            console.log('Email sent: ' + info.response);
            return info;
        } catch (error) {
            throw new Error(
                `Failed to send email to ${to}: ${error instanceof Error ? error.message : error}`,
            );
        }
    }
}

export default EmailService;
