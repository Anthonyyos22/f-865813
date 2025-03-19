#construction manaement sysytem


## About
The Construction Management System (CMS) is a web-based platform designed to 
streamline construction project management.
It connects key players in the construction industry, including engineers, 
hardware suppliers, delivery personnel, and other professionals. 
The system enables efficient record-keeping of sales, spending, and payments 
while maintaining a user-friendly interface.

## Features
Project Management: Track project progress and manage assigned personnel.
- Supplier Integration: Connect with hardware suppliers for material procurement.
- Financial Tracking: Maintain records for expenses, sales, and payments.
- User Authentication: Secure login for engineers, suppliers, and project managers.
- Responsive Design: Works across different devices seamlessly.
- Reports & Analytics: View project insights for better decision-making.

## Technologies Used
- **Frontend**: HTML, CSS, React
- **Backend**: Django
- **Database**: MySQL

## Installation
### Prerequisites
Ensure you have the following installed:
- Python 
- Django
- Node.js & npm (for React frontend)
- MySQL

### Backend Setup
1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/construction-management.git
   cd construction-management
   ```
2. Create a virtual environment:
   ```bash
   python -m venv venv
   venv\Scripts\activate  # Windows
   ```
3. Install backend dependencies:
   ```bash
   pip install -r requirements.txt
   ```
4. Configure MySQL database:
   - Open MySQL and create a database:
     ```sql
     CREATE DATABASE cms_database;
     ```
   - Update `settings.py` in Django with database credentials:
     ```python
    
5. Apply database migrations:
   ```bash
   python manage.py makemigrations
   python manage.py migrate
   ```
6. Create a superuser (optional, for admin panel):
   ```bash
   python manage.py createsuperuser
   ```
7. Start the Django server:
   ```bash
   python manage.py runserver
   ```

### Frontend Setup
1. Navigate to the frontend folder:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the React development server:
   ```bash
   npm start
   ```

## Usage
1. Register an account and log in.
2. Add and manage construction projects.
3. Track material procurement and payments.
4. View reports and analytics for better decision-making.





