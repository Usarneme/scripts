# Checksums on Win10

#### Recommended using FCIV.exe but the MS support page that links to it is 404/NotFound.
#### https://docs.microsoft.com/en-us/troubleshoot/windows-server/windows-security/fciv-availability-and-description
FCIV.exe path/to/file 
#### FCIV uses md5 by default, otherwise flag with -sha1 etc.


## Alternative ways to verify checksums


#### md5 file
CertUtil -hashfile path/to/file MD5
#### Just running `CertUtil path/to/file` will output checksums but they are inaccurate without the proper cli args. 

