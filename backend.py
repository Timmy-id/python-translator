import eel
from googletrans import Translator


trans = Translator()

eel.init("web")

@eel.expose
def translate(data, sourcelang, destlang):
    mytext = data

    t = trans.translate(mytext, src=sourcelang, dest=destlang)
    print(f'{t.origin}->{t.text}')
    outputText = f'{t.text}'
    return outputText


eel.start("index.html", size=(1500, 1500))