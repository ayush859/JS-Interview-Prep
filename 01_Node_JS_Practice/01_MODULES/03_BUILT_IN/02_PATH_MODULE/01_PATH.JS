/* 
Build file paths dynamically => path.join, path.resolve

Get file name, directory, or extension => path.basename, path.dirname,

Convert path string to object or back => path.parse,path.format

 */


const path = require('path')

const full_path = path.join('root->/parent', '/child', 'abc.txt')

console.log("the updated path is :", full_path);

const path_object = path.parse('../01_export_module/01_export_whole_file')

console.log("the path_object is :", path_object)

path_object.base = "Changed_Dir_Name"

const format_path = path.format(path_object)


console.log("the format path with changed base :", format_path)

const directory_name= path.dirname(format_path)
console.log("the directory_name of format_path is :", directory_name)




























