import Button from 'elements/Button';
import Start from 'elements/Start';
import React from 'react';
import TestimoniAccent from '../assets/images/testimonial-frame.png';

export default function Testimoni({data}) {
  return (
    <section className="container">
      <div className="row align-items-center">
        <div className="col-auto" style={{marginRight: 60}}>
          <div className="testimonial-hero" style={{margin: `30px 0 0 30px`}}>
            <img
              className="position-absolute"
              src={data.imageUrl}
              alt="Testimonial"
              style={{zIndex: 1}}
            />
            <img
              className="position-absolute"
              src={TestimoniAccent}
              alt="Testimonial"
              style={{margin: `-30px 0 0 -30px`}}
            />
          </div>
        </div>
        <div className="col-6">
          <h4 style={{marginBottom: 40}}>{data.name}</h4>
          <Start value={data.rate} width={35} height={35} spacing={5}></Start>
          <h5 className="h2 font-weight-light line-height-2 my-3">
            {data.content}
          </h5>
          <span className="text-gray-500">{data.familyName}</span>
          <div>
            <Button
              className="btn px-5"
              hasShadow
              isPrimary
              style={{marginTop: 40}}
              type="link"
              href={`testimonial/${data._id}`}>
              Read Their Story
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
