function ThreeQuotes(str) {
    return "\"\"\""+str+"\"\"\"";
}

function GetDirFromFile(filePath) {
    return filePath.substring(0, filePath.lastIndexOf("\\") + 1);
}

function GetFileName(filePath) {
    return filePath.split("\\")[filePath.split("\\").length - 1];
}

function GetFileExt(fileName) {
    return fileName.substring(fileName.lastIndexOf("."));
}

function GetFileNameWE(fileName) {
    return fileName.substring(0, fileName.lastIndexOf("."));
}

function GetCompilationCall() {
    var srcPath = document.getElementById("srcPath");
    var RA = document.getElementById("RA");
    var winApp = document.getElementById("winApp");
    var sourceFile = srcPath.value;
    var outputFile = GetDirFromFile(sourceFile) + GetFileNameWE(GetFileName(sourceFile)) + ".exe";
    var generatedCall;
    if (RA.value != "") {
        if (winApp.checked) {
            generatedCall = "powershell.exe -c \"Add-Type -Path "+ThreeQuotes(sourceFile)+" -OutputAssembly "+ThreeQuotes(outputFile)+" -RA "+RA.value+" -OutputType "+ThreeQuotes("WindowsApplication")+"\"";
        }
        else {
            generatedCall = "powershell.exe -c \"Add-Type -Path "+ThreeQuotes(sourceFile)+" -OutputAssembly "+ThreeQuotes(outputFile)+" -RA "+RA.value+"\"";
        }
    }
    else {
        if (winApp.checked) {
            generatedCall = "powershell.exe -c \"Add-Type -Path "+ThreeQuotes(sourceFile)+" -OutputAssembly "+ThreeQuotes(outputFile)+" -OutputType "+ThreeQuotes("WindowsApplication")+"\"";
        }
        else {
            generatedCall = "powershell.exe -c \"Add-Type -Path "+ThreeQuotes(sourceFile)+" -OutputAssembly "+ThreeQuotes(outputFile)+"\"";
        }
    }
    document.getElementById("compilationCall").value = generatedCall;
}

function copy() {
    document.getElementById("compilationCall").select();
}

function clearc() {
    document.getElementById("compilationCall").value = "";
}

function reseta() {
    window.location.reload();
}
