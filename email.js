const toggleBtn = document.getElementById("toggle-button");
        const body = document.body;

        function toggleTheme() {
            body.classList.toggle("dark");
        }

        toggleBtn.addEventListener('click', toggleTheme);

        // Téma mentése
        function saveTheme(theme) {
            localStorage.setItem('theme', theme);
        }

        // Téma betöltése
        function loadTheme() {
            const savedTheme = localStorage.getItem('theme');
            if (savedTheme === 'dark') {
                body.classList.add('dark');
            }
        }

        // Frissítés a gombra kattintva
        function toggleTheme() {
            if (body.classList.contains('dark')) {
                body.classList.remove('dark');
                saveTheme('light');
            } else {
                body.classList.add('dark');
                saveTheme('dark');
            }
        }

        loadTheme();

        // Inicializálja az EmailJS-t a saját Public Key-jével
        (function() {
            emailjs.init("YETrUGaMrOn8IBZWs"); // Cserélje ki a saját nyilvános kulcsára
        })();

        function sendEmail() {
            const templateParams = {
                from_name: document.getElementById('from_name').value,
                to_name: document.getElementById('to_name').value,
                message: document.getElementById('message').value,
                reply_to: document.getElementById('reply_to').value,
            };

            emailjs.send('service_7jtkw38', 'template_qjj8n3p', templateParams)
                .then((response) => {
                    console.log('SUCCESS!', response.status, response.text);
                    alert('Email sent successfully!');
                }, (error) => {
                    console.log('FAILED...', error);
                    alert('Failed to send email. Please try again later.');
                });
        }