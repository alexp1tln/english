with open('src/questsData.ts', 'r') as f:
    content = f.read()

content = content.replace('      }\n  },\n  {', '      }\n    }\n  },\n  {')
with open('src/questsData.ts', 'w') as f:
    f.write(content)
