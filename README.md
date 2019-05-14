Fork the repository in your Github account

create a module "test" under  src/areas/lead-test/lib

create routingmodule for "test"

create service for "test"

create components under lib/components folder

    - list pumps

        using angular material display the following data in angular material table 
            http://pumpapi.crowdthem.com/api/PumpsAPI/Pumps

        Paging should be done using angular material table

        display progress bar and use angular material components when possible

        Use Angular translate (ngx-translate) to display at least on statment on the page from JSON translation file
        
        Store and get the User current language variable in an observable variable in a seperate service (ex: lang = 'en')

    - Save pumps
            Open edit pop up using angular material dialog

            http://pumpapi.crowdthem.com/api/PumpsAPI/SavePump

            data sample {Id: 1, Name: "Pump 1", TankRemainedCapacity: 1.06, TankTotalCapacity: 10}

            display angular material snackbar when saved

import the module in the main app module

Maintain good code structure, choose correct code to put in the components/services


