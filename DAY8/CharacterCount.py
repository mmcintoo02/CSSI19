for i in "string example":
    print i 

    def CharacterCOunt():
        word = raw_input("Enter A string")

        d = {}
        for i in word: 
            if d.has_key(i):
                d[i] = d[i]+1
            else:
                d[i] = 1
               for x,y in d.items():
                print x,":",y