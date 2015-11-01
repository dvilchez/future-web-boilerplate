module.exports = function ( options ) {
    this.add({role: 'hello', cmd: 'show'}, function (msg, respond) {
      respond(null, {answer: 'hello world!'})
    })
}
