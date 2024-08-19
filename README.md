# 🚀 **Medical Report Summarization System(MEDSCRIBE AI)** 🚀

## 🩺 **Overview**
Welcome to the **Medical Report Summarization System**! This cutting-edge, web-based application is your one-stop solution for managing and summarizing medical reports with ease. Say goodbye to manual data extraction and hello to advanced AI-powered summaries. Built on a solid tech stack of **Flask**, **MongoDB**, **LangChain**, and **HuggingFace**, our system is designed to streamline your workflow and enhance the accuracy of your medical documentation.

## 🧩 **Project Components**

### 🎨 **User Interface (UI)**

- **🔑 Login Page:**
  - **Purpose:** Authenticate users and guide them to the appropriate report upload pages based on their credentials.
  - **Tech Stack:** HTML, CSS, JavaScript, Flask templates.

- **📤 Upload Pages:**
  - **Purpose:** Enable users to upload various types of medical reports (e.g., doctor reports, scan reports, blood reports).
  - **Tech Stack:** HTML, CSS, JavaScript, Flask templates.

- **🖥️ Summary Display Page:**
  - **Purpose:** Showcase the AI-generated summaries of the medical reports with an option to download the summary as a PDF.
  - **Tech Stack:** HTML, CSS, JavaScript, Flask templates.

### 🛠️ **Application Logic (Flask Backend)**

- **🗂️ Flask Application:**
  - Manages routing, form submissions, and database interactions seamlessly.
  - **Key Routes:**
    - `/`: Render the login page.
    - `/login`: Authenticate users and redirect them based on credentials.
    - `/upload_doctor_report`, `/upload_scan_report`, `/upload_blood_report`: Handle the upload of different types of reports.
    - `/create_patient`: Create new patient records with ease.
    - `/index`: The main hub for uploading and processing reports.
    - `/upload`: Process uploaded reports, generate summaries, and display them beautifully.
    - `/download`: Download the generated summary as a professional PDF.

### 🗄️ **Data Storage**

- **💾 MongoDB:**
  - The backbone for storing patient details and file paths for uploaded reports.
  - Ensures efficient retrieval and updating of patient information.

- **📚 ChromaDB:**
  - Stores vectorized document representations for lightning-fast retrieval during summarization.
  - Guarantees accurate search capabilities for the generated summaries.

### 🔍 **Data Processing**

- **📄 PDF Handling:**
  - **Text Extraction:**
    - Extracts text from uploaded PDFs using `pdfplumber` and `PyPDFLoader`.
    - Converts PDF content into a format that’s ready for summarization magic.

- **📝 Summarization Logic:**
  - **LangChain Integration:**
    - Leverages the `Mistral-7B-Instruct-v0.3` model to craft structured and insightful medical summaries.
    - Processes extracted text and generates comprehensive summaries using a finely-tuned prompt template.

### 🧠 **Model Integration**

- **🤖 HuggingFace Model:**
  - **Mistral-7B-Instruct-v0.3:**
    - A state-of-the-art AI model that transforms raw text into coherent and accurate medical summaries.
    - Ensures that patient reports are not only accurate but also easily understandable.

### 📂 **File Handling**

- **🗄️ File Storage:**
  - Seamlessly manages the upload, storage, and retrieval of report files and generated summaries.
  - Utilizes Flask’s file handling capabilities to manage files within the server’s filesystem.

- **📝 PDF Generation:**
  - **PDF Creation:**
    - Converts the AI-generated summary into a polished and downloadable PDF file using the `pdf_generator.py` script.
    - Delivers summaries in a professional and accessible format that you can rely on.

### 🛡️ **Logging and Error Handling**

- **📊 Logging:**
  - Monitors every step of the application with Python’s `logging` module.
  - Helps in diagnosing issues and keeping track of the application's performance.

- **⚠️ Error Handling:**
  - Handles exceptions with grace, providing user-friendly error messages.
  - Ensures smooth operation by logging errors for future reference and debugging.

### 🌐 **Integration and Deployment**

- **🚀 Flask Server:**
  - Powers the application locally or on a web server, handling all HTTP requests efficiently.
  - Serves the application to users with minimal downtime.

- **🌍 Deployment:**
  - Ensures the application is deployed in a way that is accessible, scalable, and easy to maintain.

## 📊 **Data Flow Overview**

1. **🔐 User Authentication:** Users log in and are redirected to the appropriate report upload page based on their role.
2. **📥 Report Upload:** Users upload medical reports, which are stored and linked to patient records in MongoDB.
3. **🔄 Text Extraction and Summarization:** Extracted text from reports is processed, summarized using the AI model, and stored/displayed.
4. **📤 Summary Generation and Download:** Users can view the generated summary and download it as a polished PDF.

## 🤝 **Contribution and Contact**
We welcome contributions from developers like you! Whether it’s a bug fix, feature enhancement, or new idea, feel free to open an issue or submit a pull request. Got questions? Reach out via [rajvishaal336@gmail.com](mailto:rajvishaal336@gmail.com).

## 📄 **License**
This project is licensed under the MIT License. See the LICENSE file for more details.
