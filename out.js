function out() {
    var args = Array.prototype.slice.call(arguments, 0);
    document.getElementById('output').innerHTML += args.join(' ') + '\n';
}
