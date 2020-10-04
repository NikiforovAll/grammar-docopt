# ANTLR4 grammar for docopt

## Grammar for docopt
Spec: http://docopt.org/

## Run
`./docker-antlr.sh ./src/grammars/Docopt.g4 -o ./out -Dlanguage=CSharp`
`./docker-antlr.sh ./src/grammars/Docopt.g4 -o ./out -Dlanguage=Typescript`

## Test 

Test runtime <https://github.com/tunnelvisionlabs/antlr4ts>

```bash
npm test
```

## Known issues

* Bump to ts4 when this is resolved <https://github.com/tunnelvisionlabs/antlr4ts/pull/486>
