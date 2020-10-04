import { expect } from 'chai';
import { BailErrorStrategy, CharStreams, CommonTokenStream } from 'antlr4ts';
import { DocoptLexer } from '../out/src/DocoptLexer';
import { DocoptParser } from '../out/src/DocoptParser';
import { readFileSync } from 'fs';

it('Lexer Initialization', function (done) {
    // Create the lexer and parser
    const file = readFileSync(
        './samples/hello-world.txt',
        'utf-8');
    let inputStream = CharStreams.fromString(file.trim());
    let lexer = new DocoptLexer(inputStream);
    let tokenStream = new CommonTokenStream(lexer);
    let parser = new DocoptParser(tokenStream);
    // parser.removeErrorListeners();
    // parser.errorHandler = new BailErrorStrategy();
    // expect(parser.r().text).to.include('hello');
    expect(parser.r().ID().text).to.equal('world');
    // expect().to.not.be.null;
    done();
});
