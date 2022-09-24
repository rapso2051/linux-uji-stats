# linux-uji-stats

El script a ejecutar es jsp2.js, pero este ha de ejecutarse en el mongodb shell (mongosh)

Hay otro script (bash) que llama a jsp2.js ya en mongosh

El input y output del programa es el siguiente:

[ec2-user@ip-172-31-37-38 ~]$ mongosh jsp2.js
Current Mongosh Log ID: 632f4b9e6f0b47a84e55f4d2
Connecting to:          mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.6.0
Using MongoDB:          6.0.1
Using Mongosh:          1.6.0

For mongosh info see: https://docs.mongodb.com/mongodb-shell/

------
   The server generated these startup warnings when booting
   2022-09-24T13:02:38.564+00:00: Access control is not enabled for the database. Read and write access to data and configuration is unrestricted
   2022-09-24T13:02:38.564+00:00: vm.max_map_count is too low
------

------
   Enable MongoDB's free cloud-based monitoring service, which will then receive and display
   metrics about your deployment (disk utilization, CPU, operation statistics, etc).

   The monitoring data will be available on a MongoDB website with a unique URL accessible to you
   and anyone you share the URL with. MongoDB may use this information to make product
   improvements and to suggest MongoDB products and deployment options to you.

   To enable free monitoring, run the following command: db.enableFreeMonitoring()
   To permanently disable this reminder, run the following command: db.disableFreeMonitoring()
------

Loading file: jsp2.js
fetching ...
Segmentation fault
