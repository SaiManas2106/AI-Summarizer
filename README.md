# 📝 AI Meeting Summarizer

An **AI-powered meeting summarizer** built with **Next.js**, **Groq API**, and **EmailJS**.  
It allows users to input a meeting transcript and instructions, generates a summary using AI, lets them edit it, and then send it directly to any email address.  
Deployed seamlessly on **Vercel**.  

---

## ✨ Features
- 📄 Input meeting transcript & summarization instructions  
- 🤖 Generate concise meeting summaries via **Groq API (LLaMA-3)**  
- ✏️ Edit the generated summary before sending  
- 📧 Email the summary to recipients via **EmailJS**  
- 🌐 Deployed and accessible on **Vercel**  
- 🎨 Minimal and intuitive user interface  

---

## 🛠 Tech Stack
- **Frontend:** [Next.js 14](https://nextjs.org/) + React  
- **AI Processing:** [Groq API](https://groq.com/)  
- **Email Service:** [EmailJS](https://www.emailjs.com/)  
- **Deployment:** [Vercel](https://vercel.com/)  

---

## 📂 Project Structure
ai-meeting-summarizer/
├── app/
│ └── page.js # Main UI and application logic
├── public/ # Static assets
├── .env.local # Environment variables (ignored in git)
├── .gitignore
├── package.json
└── README.md



---

## ⚙️ Getting Started

### 1. Clone the Repository

git clone https://github.com/your-username/ai-meeting-summarizer.git
cd ai-meeting-summarizer
2. Install Dependencies
bash
Copy
Edit
npm install
3. Set Up Environment Variables
Create a .env.local file in the project root:

NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
GROQ_API_KEY=your_groq_api_key
⚠️ Important:

Prefix NEXT_PUBLIC_ is required for variables accessed on the client side.

Keep .env.local private and never commit it.

4. Run Development Server

npm run dev
The app will be available at http://localhost:3000.
## 📧 EmailJS Configuration  

1. **Sign up** at [EmailJS](https://www.emailjs.com/).  
2. **Create an Email Service** (e.g., Gmail, Outlook). Copy the **Service ID**.  
3. **Create a new Email Template** (with placeholders like `{{summary}}`).  

Example Template:
```
Subject: Meeting Summary

Hello,

Here is your meeting summary:

{{summary}}

Best regards,
AI Meeting Summarizer
```
4. Get your **Public Key** from the EmailJS dashboard.  
5. Add all values (Service ID, Template ID, Public Key) to `.env.local`.  

---

## 🧪 Usage
1. Paste the **meeting transcript** into the input box.  
2. Provide **summarization instructions** (e.g., "Summarize in 5 bullet points").  
3. Click **Generate Summary** → AI generates output.  
4. (Optional) **Edit the summary**.  
5. Enter **recipient’s email address**.  
6. Click **Send via Email** → EmailJS delivers summary.  

---

## 📜 Scripts  

| Command        | Description                  |
|----------------|------------------------------|
| `npm run dev`  | Run development server       |
| `npm run build`| Create production build      |
| `npm start`    | Start production server      |

---

## 🔒 Security Notes  
- Store sensitive API keys in `.env.local` (Git-ignored).  
- Use Vercel environment variables during production deployment.  
- **NEVER** hardcode credentials into the codebase.  

---

## 🐛 Troubleshooting  

🔹 **Email not sending?** → Check EmailJS Service & Template IDs, verify `.env.local`.  
🔹 **Groq API not responding?** → Ensure `GROQ_API_KEY` is valid and within rate limits.  
🔹 **Deployment issues?** → Confirm Vercel environment variables are correctly set.  

---

## 🤝 Contributing  

1. Fork the repo  
2. Create a feature branch → `git checkout -b feature-name`  
3. Commit changes → `git commit -m "Add feature"`  
4. Push to branch → `git push origin feature-name`  
5. Open a Pull Request 🎉  

---

## 📄 License  
Licensed under the **MIT License**.  
You are free to **use, modify, and distribute** this project.  
