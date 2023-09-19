
from collecting_data_from_source import collecting_data
from partiotioning_parquet_data import partitioning_data
from add_location import add_locations
from duration import add_durations
from reports import Report
from create_table import create_tables
from insert_data import insert_data

    
# collecting data

collect_data = collecting_data()

collect_data.data_collector()

#partitioning data

partition_data = partitioning_data()

partition_data.read_partition_data()

#adding location coulmn

loc = add_locations()

loc.addlocations()

#adding duration coulmn

durations = add_durations()

durations.adddurations()

#report 

repo = Report()
repo.save_location_report()
repo.save_timeseries_report()

#creating tables in database

tables = create_tables()

tables.table_creator()
#inserting data in tables 

insert = insert_data()

insert.storing_db_location()

insert.storing_db_duration()  
  




