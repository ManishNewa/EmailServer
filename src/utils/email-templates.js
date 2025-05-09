export const emailTemplate = `
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Email Template</title>
    </head>
    <body
        style="
            margin: 0;
            padding: 0;
            background-color: #f4f4f4;
            font-family: Arial, sans-serif;
        "
    >
        <!-- Email Container -->
        <div
            style="
                max-width: 600px;
                margin: 10px auto;
                background-color: #ffffff;
                border-radius: 8px;
                box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
                overflow: hidden;
            "
        >
            <!-- Header -->
            <div
                style="
                    background-color: #6245b1;
                    color: #ffffff;
                    padding: 10px;
                    text-align: center;
                    gap: 10px;
                "
            >
                <h1>{{APP_NAME}}</h1>
                <!-- <img
                    src="{{logo-dark-removebg-preview.png}}"
                    :alt="{{APP_NAME}}"
                    style="height: 50px; width: auto"
                /> -->
            </div>

            <!-- Body -->
            <div style="padding: 15px; color: #333333; line-height: 1.4">
                {{emailBody}}
            </div>

            <!-- Footer -->
            <div
                style="
                    text-align: center;
                    padding: 15px;
                    background-color: #f4f4f4;
                    color: #777777;
                    font-size: 12px;
                "
            >
                <p>&copy; 2025 Student Portal. All rights reserved.</p>
                <p>
                    If you have any questions, contact us at
                    <a
                        href="mailto:ghampowertesting@gmail.com"
                        style="color: #6245b1"
                        >ghampowertesting@gmail.com</a
                    >.
                </p>
            </div>
        </div>
    </body>
</html>
`;
