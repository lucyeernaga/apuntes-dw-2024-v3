* {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
        }

        .body {
            display: flex;
            flex-direction: column;
            /* height: 100vh;
            gap: 20px; */
        }

        .container {
            display: flex;
            width: 100%;
            flex-grow: 1;
            gap: 20px;
        }

        .item {
            background-color: #1EAAFC;
            background-image: linear-gradient(130deg, #6C52D9 0%, #1EAAFC 85%, #3EDFD7 100%);
            box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
            color: #ffffff;
            border-radius: 4px;
            border: 6px solid #171717;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 18px;
            font-weight: bold;
        }

        .header {
            height: 100px;
            background-color: #1EAAFC;
            background-image: linear-gradient(160deg, #6C52D9 0%, #9B8AE6 127%);

            /* position sticky */
            position: sticky;
            top: 0;
        }

        .sidebar {
            background-image: linear-gradient(203deg, #3EDFD7 0%, #29A49D 90%);
            width: 200px;
        }

        .main {
            background-color: #171717;
            display: flex;
            flex-direction: column;
            flex-grow: 1;
            gap: 20px;
        }

        .content-row {
            display: flex;
            flex-grow: 1;
            gap: 20px;

        }

        .content-1,
        .content-2,
        .content-3 {
            flex-grow: 1;
            background-image: linear-gradient(130deg, #6C52D9 0%, #1EAAFC 85%, #3EDFD7 100%);
        }

        .footer {
            height: 100px;
            background-color: #1EAAFC;
            background-image: linear-gradient(160deg, #6C52D9 0%, #9B8AE6 127%);

        }

        .main .item {
            height: 200px;
        }

        /* botón de whatsapp */

        .whatsapp {
            position: fixed;
            bottom: 20px;
            right: 20px;

            background-color: white;
            border-radius: 50%;
            width: 39px;
            height: 39px;

        }

        .whatsapp i {
            font-size: 48px;
            color: greenyellow;
            margin-top: -3px;
            margin-left: -1px;
        }