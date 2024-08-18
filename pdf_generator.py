# pdf_generator.py
from fpdf import FPDF
import os

class PDF(FPDF):
    def header(self):
        self.set_font('Arial', 'B', 25)
        self.cell(0, 10, 'Medical Report', 0, 1, 'C')
        self.ln(10)

    def footer(self):
        self.set_y(-15)
        self.set_font('Arial', 'I', 10)
        self.cell(0, 10, 'Page ' + str(self.page_no()), 0, 0, 'C')

    def patient_info(self, name, joining_date, age, discharge_date, gender, patient_id):
        self.set_font('Arial', 'B', 13)
        self.cell(0, 10, f'Name: {name}                                                                        Joining Date: {joining_date}', 0, 1)
        self.cell(0, 10, f'Age: {age}                                                                                   Discharge Date: {discharge_date}', 0, 1)
        self.cell(0, 10, f'Gender: {gender}                                                                         Patient ID: {patient_id}', 0, 1)
        self.ln(10)

    def add_summary(self, summary):
        self.set_font('Arial', '', 12)
        self.multi_cell(0, 10, '-'*130)
        self.cell(0, 10, 'SUMMARY', 0, 1, 'C')
        self.multi_cell(0, 10, '-'*130)
        self.multi_cell(0, 10, summary)
        self.multi_cell(0, 10, '-'*130)
        self.ln(10)

    def doctor_info(self, doctor_name, hospital_description):
        self.set_font('Arial', 'B', 12)
        self.cell(0, 10, f'Doctor: {doctor_name}', 0, 1)
        self.multi_cell(0, 10, hospital_description)
        self.ln(10)

def create_pdf( summary,pdf_filename):
    pdf = PDF()
    pdf.add_page()
    # Add patient information
    # Add summary section
    pdf.add_summary(summary)
    # Add doctor and hospital information
    pdf.output(pdf_filename)
