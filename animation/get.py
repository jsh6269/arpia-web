import os

# 현재 디렉토리의 모든 폴더를 가져옵니다.
folders = [folder for folder in os.listdir() if os.path.isdir(folder)]

# 모든 폴더명에서 "swf" 부분을 삭제합니다.
for folder in folders:
    print('"'+folder+'"', end=", ")
#    new_folder_name = folder.replace("swf", "")
#    print(new_folder_name)
    # 새로운 폴더 이름으로 변경합니다.
 #   os.rename(folder, new_folder_name)
