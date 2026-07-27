import re

with open('src/courseData.ts', 'r', encoding='utf-8') as f:
    content = f.read()

# find all questions in the json/ts structure and replace
# We can just do a global regex replacement on lines that contain "question":
lines = content.split('\n')
new_lines = []
for line in lines:
    if '"question":' in line:
        # replace any ( ... Cyrillic ... ) and optional leading space
        line = re.sub(r'\s*\([^)]*[а-яА-Я][^)]*\)', '', line)
    new_lines.append(line)

with open('src/courseData.ts', 'w', encoding='utf-8') as f:
    f.write('\n'.join(new_lines))
