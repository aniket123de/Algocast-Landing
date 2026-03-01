import os
import re

src_dir = r"D:\Programming\AlgoCast\frontend\Template\src"

pattern_60 = re.compile(r'\btext-muted/60\b')
pattern_exact = re.compile(r'\btext-muted\b(?!-)')

def replace_in_file(filepath):
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
            
        new_content = pattern_60.sub('text-[#0A1B3F]', content)
        new_content = pattern_exact.sub('text-[#0A1B3F]', new_content)
        
        if new_content != content:
            with open(filepath, 'w', encoding='utf-8') as f:
                f.write(new_content)
            print(f"Updated {filepath}")
    except Exception as e:
        print(e)

count = 0
for root, _, files in os.walk(src_dir):
    for filename in files:
        if filename.endswith(('.tsx', '.ts', '.css')):
            filepath = os.path.join(root, filename)
            replace_in_file(filepath)
print("Done.")
