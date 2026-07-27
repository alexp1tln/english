with open('src/components/AnimatedBackground.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

content = content.replace('#0a0a0c', '#050506')
content = content.replace('ease: "linear"', 'ease: "easeInOut"')

with open('src/components/AnimatedBackground.tsx', 'w', encoding='utf-8') as f:
    f.write(content)
