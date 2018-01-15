# How I got this page working:
I don't know....but [this](https://programminghistorian.org/lessons/building-static-sites-with-jekyll-github-pages) tutorial send me in the right direction :)

# Creating a Website isn't easy...

	2018/01/03 Can't be build locally because ffi isn't compatible with ruby version 2.5.0...
	To fix this just run: choco uninstall ruby
						choco install ruby --version 2.4.3.1 -y

	2018/01/03 Still not working :d
	
	libcurl error !!! On windows, I really hate this library (not the first time I have errors...)
	reinstalled ruby and that somehow fixed the Issue <3
	2018/01/03 Trying to follow following tutorial but I always get an SSL error -.-
	https://gist.github.com/luislavena/f064211759ee0f806c88#installing-using-update-packages-new should fix it but it didn't work :d so again:
	uninstall with Iobituninstaller EVERYTHING related to ruby and manually remove C:\tools and C:\ruby (around 600MB :sob:)
	----
	I "finished" this Tutorial by doing a reinstall and adding my C:\tools\ruby24 to the config.yml of the devkit and the I ran gem install github-pages....
	well that wasn't worth the stress
	----
	back at the libcurl error... ****
	I screwed that Tutorial and did something else...
	Yeah I know I have a lot of stamina but in my mindset everything is crap if there are no solutions on google.

[Link](https://gnarmagon.github.io/info.html) to the Webkit Info Page
[Link](https://gnarmagon.github.io/webkit.html) to the Webkit Payload test page