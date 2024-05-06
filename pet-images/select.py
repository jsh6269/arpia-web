import glob
print("hi")
def find_idle_gif_files(directory):
    return glob.glob('./*/idle.gif', recursive=True)

directory = "./"  # 원하는 디렉토리 경로 입력
idle_gif_files = find_idle_gif_files(directory)

for file_path in idle_gif_files:
    print(file_path)
