import os
from glob import glob
fileList = sorted(glob("./*/*.gif"))

actionLst = [
  "stand1",
  "xa",
  "xb",
  "front1",
  "back1",
  "moveFront1",
  "moveSide1",
  "moveBack1",
  "idle1",
  "spellCast1",
  "hit1",
  "victory1",
  "dead1",
  "all1",
  "stand2",
  "front2",
  "back2",
  "moveFront2",
  "moveSide2",
  "moveBack2",
  "idle2",
  "spellCast2",
  "hit2",
  "victory2",
  "dead2",
  "all2",
  "xc",
]
intent = 0
for file in fileList:
    print(file)
    newName = "./"+file.split("\\")[1]+"/"+actionLst[intent]+".gif"
    os.rename(file, newName)
    intent = (intent + 1) % len(actionLst)
    
