import re

with open('src/App.tsx', 'r') as f:
    content = f.read()

# Find and remove function LessonQuiz
lesson_quiz_pattern = re.compile(r'function LessonQuiz.*?^}', re.MULTILINE | re.DOTALL)
if lesson_quiz_pattern.search(content):
    content = lesson_quiz_pattern.sub('', content)
    print("LessonQuiz removed.")
else:
    print("LessonQuiz not found.")
    
# Add import
import_statement = "import LessonQuiz from './components/LessonQuiz';\n"
if "import LessonQuiz" not in content:
    content = content.replace("import ModuleTestResult", "import LessonQuiz from './components/LessonQuiz';\nimport ModuleTestResult")
    
with open('src/App.tsx', 'w') as f:
    f.write(content)

