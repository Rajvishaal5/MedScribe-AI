Medical Report Summarization System(MedScribe AI)
Overview
The Medical Report Summarization System is a web-based application designed to facilitate the management and summarization of medical reports. It allows users to upload various types of medical reports, processes these reports to extract relevant information, and generates comprehensive summaries using advanced AI models. This system is built with Flask for the web framework, MongoDB for data storage, and integrates with LangChain and HuggingFace for text processing and summarization.

Project Components
1. User Interface (UI)
Login Page:

Purpose: Authenticates users and directs them to the appropriate report upload pages based on their credentials.
Technologies: HTML, CSS, JavaScript, Flask templates.
Upload Pages:

Purpose: Allows users to upload different types of medical reports (doctor reports, scan reports, blood reports).
Technologies: HTML, CSS, JavaScript, Flask templates.
Summary Display Page:

Purpose: Shows the generated summary of the medical reports and provides an option to download the summary as a PDF.
Technologies: HTML, CSS, JavaScript, Flask templates.
2. Application Logic (Flask Backend)
Flask Application:
Handles routing, form submissions, and interactions with the database.
Key Routes:
/: Renders the login page.
/login: Authenticates users and redirects based on credentials.
/upload_doctor_report, /upload_scan_report, /upload_blood_report: Handles the upload of various types of reports.
/create_patient: Allows the creation of new patient records.
/index: Main page for uploading and processing reports.
/upload: Processes uploaded reports, generates summaries, and displays them.
/download: Provides the generated summary PDF for download.
3. Data Storage
MongoDB:

Stores patient details and file paths for uploaded reports.
Used for retrieving and updating patient information.
ChromaDB:

Stores vectorized representations of documents for efficient retrieval during summarization.
Ensures quick and accurate search capabilities for the generated summaries.
4. Data Processing
PDF Handling:

PDF Extraction:
Extracts text from uploaded PDF files using pdfplumber and PyPDFLoader.
Converts PDF content into a format suitable for summarization.
Summarization Logic:

LangChain Integration:
Utilizes the Mistral-7B-Instruct-v0.3 model for generating structured medical summaries.
Processes extracted text and creates comprehensive summaries based on a detailed prompt template.
5. Model Integration
HuggingFace Model:
Mistral-7B-Instruct-v0.3:
An advanced AI model used to generate structured and coherent summaries from the extracted text.
Provides accurate and readable medical summaries for patient reports.
6. File Handling
File Storage:

Manages the upload, storage, and retrieval of report files and generated summaries.
Uses Flask’s file handling functions to handle files in the server’s filesystem.
PDF Generation:

PDF Creation:
Converts the generated summary into a downloadable PDF file using the pdf_generator.py script.
Ensures that summaries are provided in a professional and accessible format.
7. Logging and Error Handling
Logging:

Tracks events and errors within the application using Python’s logging module.
Helps in debugging and monitoring the application's performance and issues.
Error Handling:

Manages exceptions and provides user-friendly error messages.
Ensures that errors are handled gracefully and logged for future reference.
8. Integration and Deployment
Flask Server:

Runs the Flask application locally or on a web server.
Handles HTTP requests and serves the application to users.
Deployment:

Ensures the application is accessible, scalable, and maintained.
Data Flow Overview
User Authentication: Users log in and are redirected to the appropriate report upload page based on their role.
Report Upload: Users upload medical reports, which are stored and linked to patient records in MongoDB.
Text Extraction and Summarization: Extracted text from reports is processed, summarized using the AI model, and the summary is stored and displayed.
Summary Generation and Download: Users can view the generated summary and download it as a PDF.
Contribution and Contact
Contributions to the project are welcome. Please open issues or submit pull requests for enhancements or bug fixes. For any questions, contact your-email@example.com.

License
This project is licensed under the MIT License. See the LICENSE file for more details.
