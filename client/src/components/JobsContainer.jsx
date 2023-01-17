import React from 'react';
import {useAppContext} from '../constext/appContext';
import { useEffect } from 'react';
import Loading from './Loading';
import Job from './Job';
import Wrapper from '../assets/wrappers/JobsContainer'
import PageBtnContainer from './PageBtnContainer';
import Alert from './Alert'


const JobsContainer = () => {

    const {
        getJobs,
        jobs,
        isLoading,
        page,
        totalJobs,
        search,
        searchType,
        searchStatus,
        sort,
        numOfPages,
        showAlert
    } = useAppContext()

    useEffect(() => {
      getJobs()
      // eslint-disable-next-line
    }, [page,search,searchType,searchStatus,sort])

    if(isLoading){
        return <Loading center />
    }

    if(jobs.length === 0){
        return (
            <Wrapper>
                <h2>No jobs to display....</h2>
            </Wrapper>
        )   
    }
    

  return (
    <Wrapper>
        {showAlert && <Alert/>}
        <h5>{totalJobs} job{jobs.length > 1 && 's'} found</h5>

        <div className="jobs">
            {jobs.map((job)=> {
                return (
                    <Job key={job._id} {...job} />
                )
            })}
        </div>
            
       {/* page btn container */}
       {numOfPages > 1 && <PageBtnContainer/> } 

    </Wrapper>
  )
}

export default JobsContainer