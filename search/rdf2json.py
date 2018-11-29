from rdflib import Graph, plugin
from rdflib.serializer import Serializer
op = ""
while(True):
	try:
		testrdf = input()
	except:
		break
	g = Graph().parse(data=testrdf, format='n3')
	op+= str(g.serialize(format='json-ld', indent=1)) +'\n'
print(op)