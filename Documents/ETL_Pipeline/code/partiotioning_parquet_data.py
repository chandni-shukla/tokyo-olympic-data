import requests 
import json
import pandas as pd 
import pyarrow.parquet as pq
import pyarrow as pa
from pyarrow.parquet import ParquetFile
import pyarrow.dataset as ds
import os 
from send_email import email_notify
import logging 

class partitioning_data:

#function to read parquet file
    def read_partition_data(self):
        
        try:
                
            path = "/home/manjeet/Downloads/ETL_Pipeline/data/parquet"
            
            if (os.path.exists(path)):
                for file in os.listdir(path):
                    # print(path+"/"+str(file))
                    df = ParquetFile(path+"/"+str(file))
                # print(df)
            
            # Performing Partitioning

            parquet_file = pq.ParquetFile('/home/manjeet/Downloads/ETL_Pipeline/data/parquet/parquet_data.parquet')
            counter=0
            for val in parquet_file.iter_batches(batch_size=250):
                
                if val is not None:
                    
                    df=pa.Table.from_batches([val]).to_pandas()
                    df.to_parquet(f'/home/manjeet/Downloads/ETL_Pipeline/data/partition_data/batch{counter}.parquet')
                    counter+=1
                    
            email_notify.email_send_requests('partitioning done successfully')    
            
            logging.basicConfig(filename="/home/manjeet/Downloads/ETL_Pipeline/logs/logss.log",format='%(asctime)s - %(message)s', level=logging.INFO,filemode="a")

            logging.info('partitioning the parquet file in 4 files done successfully')   
            
        except:    
            
            logging.basicConfig(filename="/home/manjeet/Downloads/ETL_Pipeline/logs/logss.log",format='%(asctime)s - %(message)s', level=logging.ERROR,filemode="a")

            logging.error('partitioning not done ') 
        
       
        
# partition_data = partitioning_data()

# partition_data.read_partition_data()