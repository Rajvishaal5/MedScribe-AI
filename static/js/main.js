document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const doctorReportForm = document.getElementById('doctorReportForm');
    const scanReportForm = document.getElementById('scanReportForm');
    const bloodReportForm = document.getElementById('bloodReportForm');
    const createPatientForm = document.getElementById('createPatientForm');
    const summaryForm = document.getElementById('summaryForm');

    const messages = {
        createPatient: "Patient ID not found. Please create a new patient ID.",
    };

    if (loginForm) {
        loginForm.addEventListener('submit', (event) => {
            event.preventDefault();
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;

            fetch('/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                body: new URLSearchParams({ username, password })
            })
            .then(response => {
                if (response.redirected) {
                    window.location.href = response.url;
                } else {
                    alert('Invalid username or password');
                }
            });
        });
    }

    const handleFormSubmission = (form, endpoint) => {
        form.addEventListener('submit', (event) => {
            event.preventDefault();
            const patientId = form.querySelector('[name="patientId"]').value;

            fetch(`/validate_patient/${patientId}`)
            .then(response => response.json())
            .then(data => {
                if (data.exists) {
                    form.submit();
                } else {
                    document.getElementById('message').innerText = messages.createPatient;
                }
            });
        });
    };

    if (doctorReportForm) handleFormSubmission(doctorReportForm, '/upload_doctor_report');
    if (scanReportForm) handleFormSubmission(scanReportForm, '/upload_scan_report');
    if (bloodReportForm) handleFormSubmission(bloodReportForm, '/upload_blood_report');
    if (createPatientForm) {
        createPatientForm.addEventListener('submit', (event) => {
            event.preventDefault();
            createPatientForm.submit();
        });
    }
    if (summaryForm) {
        summaryForm.addEventListener('submit', (event) => {
            event.preventDefault();
            summaryForm.submit();
        });
    }
});
