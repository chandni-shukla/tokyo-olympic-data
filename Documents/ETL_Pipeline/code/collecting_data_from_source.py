import requests 
import json
import pandas as pd 
import pyarrow.parquet as pq
import pyarrow as pa
from send_email import email_notify
import logging 


class collecting_data:
    
    def data_collector(self):
        
        try:
        
            #Connecting to API
            api_data = requests.get('https://data.cityofnewyork.us/resource/t29m-gskq.json')
            data = api_data.text

            data1 = json.loads(data)

            #Converting data into Dataframe
            df = pd.DataFrame(data1)

            #Saving data as CSV file
            df.to_csv("/home/manjeet/Downloads/ETL_Pipeline/data/csv/new_fetchdata.csv")

            #Reading CSV file
            df_new = pd.read_csv("/home/manjeet/Downloads/ETL_Pipeline/data/csv/new_fetchdata.csv")


            #converting csv file to parquet
            table = pa.Table.from_pandas(df_new)
            pq.write_table(table, '/home/manjeet/Downloads/ETL_Pipeline/data/parquet/parquet_data.parquet')


            email_notify.email_send_requests('data collected and save in parquet file successfully')
            
            logging.basicConfig(filename="/home/manjeet/Downloads/ETL_Pipeline/logs/logss.log",format='%(asctime)s - %(message)s', level=logging.INFO,filemode="a")

            logging.info('data collected and save in parquet file successfully')
            
        except:
            
            logging.basicConfig(filename="/home/manjeet/Downloads/ETL_Pipeline/logs/logss.log",format='%(asctime)s - %(message)s', level=logging.ERROR,filemode="a")

            logging.error('data not collected successfully')
 
 
# m = collecting_data()
# m.data_collector()



