1). Why npm?
      Npm  is a Node Package Manager that helps in installing various node modules and resolve various dependencies.We can install third party packages and modules developed by various developers and use it in our own projects.

2). Why npm -g, save-dev?
      Npm -g ,this -g flag is used to install npm packages globally.
      Save-dev signifies that the package is development dependency.A development dependency is any package that absence will not affect the work application.In packagage.json file under the devDenpendencies section contains the list of all devolment dependencies.When someone installs your package they will not install any dependencies but they clone the repositary then they will install all the development dependencies too.

3). Why yarn?
      Yarn is  javascript package manager created by facebook.it stands for Yet Another Resource Negotiator.It is an alternative for npm.It has the same features that the other workflows while operating more faster, more secure and more reliably.

4). How  to upgrade to new express js?
      Run  'npm install -g express@version'in command line.

5). How to use old express js?
      Run  'npm install -g express@version'in command line.

6). How to maintain external dependencies?    
      External dependencies are not stored in svn repositary. Instead we put them under ./extern or c:\extern on windows. We don't want to put them in our repository because We will not be able to update them that way. Some of these are constantly being updated.
           Svn repositary is a collection of files and directories.
           
                   