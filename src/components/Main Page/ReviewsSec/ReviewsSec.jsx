import React, { useEffect, useMemo, useState } from 'react'
import * as styles from './reviewsSec.module.css'
import { reviews } from '@static/reviews'
import ReviewCard from './ReviewCard'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'

function ReviewsSec() {

    const [size, setSize] = useState(Math.floor(window.innerWidth / 420))

    window.addEventListener('resize', ()=>{
        if(Math.floor(window.innerWidth / 420) == 0){
            setSize(1)
        } else setSize(Math.floor(window.innerWidth / 420))
    })

    const [comments, setComments] = useState([])

    const [page, setPage] = useState(0)

    let amount = Math.ceil(reviews.length / size);

    useMemo(()=>{
        let length = size + page*size
        let copy = []
        for(let i = size*page;i<length;i++){
            copy.push(reviews[i])
        }
        setComments([...copy])
    }, [size, page])

    useMemo(()=>{
        amount = Math.ceil(comments.length / size)
    },[size, page])

    const changePage = (p)=>{
        document.querySelector(`.${styles['comments-box']}`).setAttribute('style', 'opacity: 0')
        setTimeout(()=>{
            setPage((page+p+amount)%amount)
            document.querySelector(`.${styles['comments-box']}`).setAttribute('style', 'opacity: 1')
        }, 300)
    }

  return (
    <section className={styles.cont}>
        <h2>What Our Clients Say</h2>
        <div>
            <p>
                Read the success stories and heartfelt testimonials from our valued clients. 
                Discover why they chose Estatein for their real estate needs.
            </p>
            <button>View All Testimonials</button>
        </div>

        <div className={styles['comments-box']}>
            {comments.map((e,i)=>{
                return <ReviewCard info={e} key={i}/>
            })}

        </div>

        <div>

            <p>Page: {page+1} of {amount}</p>
            
            <div className={styles.buttons}>
                <FontAwesomeIcon icon={faArrowLeft} className={styles.button} onClick={()=>changePage(-1)}/>
                <FontAwesomeIcon icon={faArrowRight} className={styles.button} onClick={()=>changePage(1)}/>
            </div>
        </div>

    </section>
  )
}

export default ReviewsSec