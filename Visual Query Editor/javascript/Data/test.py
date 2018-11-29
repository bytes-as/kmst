#<rdfs:domain rdf:resource="https://data.nasa.gov/ontologies/atmonto/NAS#PhysicalRunway"/>

fp = open("allFilesRDF/equipment.rdf")
lines = fp.readlines()
fp.close()

subject = set()

for line in lines:
    line = line.strip()
    if '<rdfs:domain rdf:resource="' in line:
        subject.add(line[len('<rdfs:domain rdf:resource="'):+line.index('"/>')])
for i in subject:
    print(i)





'''rdfs, s, flag = list(), list(), 0
for line in lines:
    if "<rdf:Description" in line:
        flag = 1
    if flag:
        s+= [line.strip()]
    if "</rdf:Description>" in line:
        rdfs.append(s)
        s = list()
        flag = 0'''

'''fp = open("final_data.csv", "w")

for rdf in rdfs:
    for i in rdf:
        property_ = i[len('<rdf:Description rdf:about="'):]
        if "rdfs:domain" in i:
            subject = i[len('<rdfs:domain rdf:resource="'):i.index('"/>')]
        if "rdfs:range" in i:
            object_ =  i[len('<rdfs:range rdf:resource="'):i.index('"/>')]
        try:
            fp.write(subject+","+property_+","+object_+"\n")
        except:
            pass
        

fp.close()'''
