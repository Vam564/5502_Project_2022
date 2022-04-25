import React from 'react'
import './index.css'
import img_nature from "../assets/img_nature.jpeg";
import image from "../assets/project-images/image.png"
import dataset from '../assets/dataset_img.jpeg'
import dataset1 from '../assets/dataset-2.png'
import act_vs_inact from '../assets/project-images/act-vs-inact.png'
import correlation_data from '../assets/project-images/correlation-data.png'
import count_male_female from '../assets/project-images/count-male-female.png'
import count_of_tenure from '../assets/project-images/count-of-tenure.png'
import density_distribution from '../assets/project-images/density-distribution.png'
import distribution from '../assets/project-images/distribution.png'
import exited_non_exited_age from '../assets/project-images/exited-non-exited-age.png'
import exited_non_exited from '../assets/project-images/exited-non-exited.png'
import gender_exited from '../assets/project-images/gender-exited.png'
import geo_exited from '../assets/project-images/geo-exited.png'
import tenure_exited from '../assets/project-images/tenure-exited.png'

/*
0: "act-vs-inact.png"
1: "correlation-data.png"
2: "count-male-female.png"
3: "count-of-tenure.png"
4: "density-distribution.png"
5: "distribution.png"
6: "exited-non-exited-age.png"
7: "exited-non-exited.png"
8: "gender-exited.png"
9: "geo-exited.png"
10: "image.png"
11: "image_1.png"
12: "tenure-exited.png
*/


function Home() {


    const myFunction = (imgs) => {
        console.log(imgs.target.currentSrc)
        var expandImg = document.getElementById("expandedImg");
        console.log(expandImg)
        // var imgText = document.getElementById("imgtext");
        expandImg.src = imgs.target.currentSrc;
        // imgText.innerHTML = imgs.alt;
        expandImg.parentElement.style.display = "flex";
    }
    const close = () => {
        var expandImg = document.getElementById("expandedImg");
        expandImg.parentElement.style.display = "none";
    }

    function importAll(r) {
        let images = {};
        r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
        return images;
    }

    const images_all = importAll(require.context('../assets/project-images', false, /\.(png|jpe?g|svg|jpg)$/));
    const img_names = Object.keys(images_all)
    console.log(img_names)
    return (
        <div className='main-content px-5'>
          
            <h1 className='title py-3 font-weight-bold'>Customer Churn Prediction</h1>

            <div className='body'>

                <div className='project-summary px-2'>
                    <p>
                        Churn prediction is probably one of the most important applications of data science in the commercial sector. The thing which makes it popular is that its effects are more tangible to comprehend and it plays a major factor in the overall profits earned by the business.
                    </p>
                    <p>
                        Customer Churn is a financial term used to indicate the loss of customers or
                        clients, which happens when customer ceases showing interest in our business.
                        So, the rate at which companies lose their subscribers at specific periods is called
                        the churn rate. So, any company/business needs to identify/predict these potential
                        customers who are willing to cease doing business in the future. So, we will be
                        performing the Binary classification task using different Classification Machine
                        learning Algorithms for the customer churn prediction. The prediction involves the
                        classification of churn and non-churn customers This prediction would help retain
                        the customers by proactive engagement/interaction with those set of customers.
                        This project results in displaying the best model, which classifies the churn
                        prediction of customers well.
                    </p>
                </div>

                <div className='project-dataset py-3'>
                    <h2>Project Dataset :</h2>
                    <div className='dataset-load'>
                        <img src={dataset1} id="datasetImg" className='pt-3' />
                    </div>
                </div>
                <div className='project-info'>
                    <h2>Data Visualisations :</h2>
                    <div className='project-imgs'>
                        <div className="row">
                            <div className="column">
                                <img src={act_vs_inact} alt="Visualisations" className='images' style={{ width: "100%" }} onClick={myFunction} />
                            </div>
                            <div className="column">
                                <img src={count_of_tenure} alt="Visualisations" className='images' style={{ width: "100%" }} onClick={myFunction} />
                            </div>
                            <div className="column">
                                <img src={count_male_female} alt="Visualisations" className='images' style={{ width: "100%" }} onClick={myFunction} />
                            </div>
                            <div className="column">
                                <img src={exited_non_exited} alt="Visualisations" className='images' style={{ width: "100%" }} onClick={myFunction} />
                            </div>
                        </div>
                        <div className="row">
                            <div className="column">
                                <img src={exited_non_exited_age} alt="Visualisations" className='images' style={{ width: "100%" }} onClick={myFunction} />
                            </div>
                            <div className="column">
                                <img src={tenure_exited} alt="Visualisations" className='images' style={{ width: "100%" }} onClick={myFunction} />
                            </div>
                            <div className="column">
                                <img src={gender_exited} alt="Visualisations" className='images' style={{ width: "100%" }} onClick={myFunction} />
                            </div>
                            <div className="column">
                                <img src={geo_exited} alt="Visualisations" className='images' style={{ width: "100%" }} onClick={myFunction} />
                            </div>
                        </div>
                        <div className="row">
                            <div className="column">
                                <img src={correlation_data} alt="Visualisations" className='images' style={{ width: "100%" }} onClick={myFunction} />
                            </div>
                            <div className="column">
                                <img src={density_distribution} alt="Visualisations" className='images' style={{ width: "100%" }} onClick={myFunction} />
                            </div>
                            <div className="column">
                                <img src={distribution} alt="Visualisations" className='images' style={{ width: "100%" }} onClick={myFunction} />
                            </div>
                            <div className="column">
                                <img src={image} alt="Visualisations" className='images' style={{ width: "100%" }} onClick={myFunction} />
                            </div>
                        </div>

                        <div className="container">
                            <span onClick={close} className="closebtn">&times;</span>
                            <img id="expandedImg" />
                            <div id="imgtext"></div>
                        </div>
                    </div>

                </div>

                <div className='project-scores py-3'>
                    <div className="accuracy-values">
                        <h3>Accuracy of different models :</h3>
                        <ul class="list-group list-group-light py-3">
                            <li class="list-group-item list-group-item-primary accuracy-values-container">
                                <h4 className='model-name'>Logistic Regression</h4>
                                <span className="badge badge-dark rounded-pill values ">0.836</span>
                            </li>
                            <li className="list-group-item list-group-item-secondary accuracy-values-container">
                                <h4 className='model-name'>Decision Tree</h4>
                                <span className="badge badge-dark rounded-pill values">0.857</span>
                            </li>
                            <li className="list-group-item list-group-item-success accuracy-values-container">
                                <h4 className='model-name'>KNN </h4>
                                <span className="badge badge-dark rounded-pill values">0.792</span>
                            </li><li className="list-group-item list-group-item-warning accuracy-values-container">
                                <h4 className='model-name'>Random Forest</h4>
                                <span className="badge badge-dark rounded-pill values">0.859</span>
                            </li><li className="list-group-item list-group-item-info accuracy-values-container">
                                <h4 className='model-name'>Complement Naive Bayes</h4>
                                <span className="badge badge-dark rounded-pill values">0.667</span>
                            </li><li className="list-group-item list-group-item-dark accuracy-values-container">
                                <h4 className='model-name'>Support Vector Machine</h4>
                                <span className="badge badge-dark rounded-pill values">0.856</span>
                            </li>
                        </ul>
                    </div>
                    <div className="f1-score-values py-3">
                        <h3>F1-Scores of different models :</h3>
                        <ul className="list-group list-group-light py-3">
                            <li className="list-group-item list-group-item-primary accuracy-values-container">
                                <h4 className='model-name'>Logistic Regression</h4>
                                <span className="badge badge-dark rounded-pill values">0.414</span>
                            </li>
                            <li className="list-group-item list-group-item-secondary accuracy-values-container">
                                <h4 className='model-name'>Decision Tree</h4>
                                <span className="badge badge-dark rounded-pill values">0.546</span>
                            </li>
                            <li className="list-group-item list-group-item-success accuracy-values-container">
                                <h4 className='model-name'>KNN </h4>
                                <span className="badge badge-dark rounded-pill values">0.455</span>
                            </li><li className="list-group-item list-group-item-warning accuracy-values-container">
                                <h4 className='model-name'>Random Forest</h4>
                                <span className="badge badge-dark rounded-pill values">0.514</span>
                            </li><li className="list-group-item list-group-item-info accuracy-values-container">
                                <h4 className='model-name'>Complement Naive Bayes</h4>
                                <span className="badge badge-dark rounded-pill values">0.433</span>
                            </li><li className="list-group-item list-group-item-dark accuracy-values-container">
                                <h4 className='model-name'>Support Vector Machine</h4>
                                <span className="badge badge-dark rounded-pill values">0.518</span>
                            </li>
                        </ul>
                    </div>
                   {/*  <div className='final-graphs'>
                        <h3>Best Model Graphs</h3>
                        <div className="row">
                            <div className="column_next">
                                <img src={correlation_data} alt="Visualisations" className='images' style={{ width: "100%" }} onClick={myFunction} />
                            </div>
                            <div className="column_next">
                                <img src={density_distribution} alt="Visualisations" className='images' style={{ width: "100%" }} onClick={myFunction} />
                            </div>
                        </div> 
                    </div>*/}
                </div>
                <div className='project-best-model py-3'>
                    <h3 className='best-model-txt'>Best Model :</h3>
                    <p>We went through the various tasks involved in Churn prediction in this project. It is important to note that finding patterns in Exploratory Data Analysis (EDA) is as important as the final prediction itself.

                        A Churn prediction task remains unfinished if the data patterns are not found in EDA. Most people can do the prediction part but struggle with data visualization and conveying the findings in an interesting way.

                        We have developed different models and tested them with our data which we splitted as train and test. After comparing the accuracy and f1-scores The Decision Tree model looks great. This model can be used for Customer Churn Prediction. </p>
                </div>
            </div>
            <div className='source-code'>
                 <p className='font-weight-bold'>Source Code: <a target='_blank' href="https://github.com/Vam564/5502_Project_2022" className='source-link'> Refer here </a></p>
            </div>
            <div className="grid project-mates">
                <h3 className='prof-name'>Professor : Xiao Ting <span className='prof-mail'>( Ting.Xiao@unt.edu )</span></h3>
                <h3>Project Team :</h3>
                <div className="g-col-3">
                    <p>
                        <span className='font-weight-bold'>Harshavardhan Bhupathi </span>
                        – HarshaVardhanBhupathi@my.unt.edu  - (11514028)
                    </p>
                </div>
                <div className="g-col-3">
                    <p>
                        <span className='font-weight-bold'>Dilip Kumar Pittala </span>
                        - DilipKumarPittala@my.unt.edu - (11515093)
                    </p>
                </div>
                <div className="g-col-3">
                    <p>
                        <span className='font-weight-bold'>Vamshi Kumar Konduru </span>
                        – VamshiKumarKonduru@my.unt.edu - (11516045)
                    </p>
                </div>
                <div className='g-col-3'>
                    <p>
                        <span className='font-weight-bold'>Sanjay Reddy Manda </span>
                        - SanjayReddyManda@my.unt.edu  - (11524794)
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Home