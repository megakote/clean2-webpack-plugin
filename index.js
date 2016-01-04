var rimraf = require('rimraf');
var path = require('path');
var resolve = path.resolve;

function Plugin(paths, context)
{
    if (! (context && paths))
    {
        throw new Error('You must specify your paths or context absolute path');
        return;
    }

    // determine webpack root
    this.context = context;

    // store paths
    this.paths = paths;

    // allows for a single string entry
    if (typeof paths == 'string' || paths instanceof String)
    {
        paths = [paths];
    }
}

Plugin.prototype.apply = function(compiler)
{
    var self = this;

    // preform an rm -rf on each path
    self.paths.forEach(function(path)
    {
        path = resolve(self.context, path);

        // disallow deletion of project path and any directories outside of project path.
        if (path != self.context && path.indexOf(self.context) === 0)
        {
            rimraf.sync(path);
        }
        else
        {
            console.warn("Clean webpack can not delete path: " + path);
        }
    });
};

module.exports = Plugin;
