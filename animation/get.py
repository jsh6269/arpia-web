import os

# 디렉토리를 순회하면서 파일 이름에 xa가 들어가는 파일 삭제
def delete_files_with_xa(root_dir):
    for root, dirs, files in os.walk(root_dir):
        for filename in files:
            if "xf" in filename:
                file_path = os.path.join(root, filename)
                try:
                    os.remove(file_path)
                    print(f"Deleted file: {file_path}")
                except OSError as e:
                    print(f"Error: {file_path} - {e}")

# 함수 호출 (루트 디렉토리를 지정해야 함)
root_directory = "./"
delete_files_with_xa(root_directory)
