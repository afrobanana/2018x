import React from 'react'

import envImg from './images/environment.jpg'

export default () => (
  <section className="guide-environment">
    <img src={envImg} alt="Take care of your selves!" />
    <dl>
      <dt>MEDICAL HELP & EMERGENCIES</dt>
      <dd>
        We have ensured that a team of professional first aid doctors/medics
        will be patrolling the site at all times to provide any help needed in
        case of emergency. Please contact your nearest security guard if help is
        required.
      </dd>

      <dt>FIRE SAFETY</dt>
      <dd>
        Fire hazards are no small deal during the summer months and we wouldn't
        want to burn the lovely forest down, so please be aware that lighting
        fire is strictly forbidden on the festival premises!
      </dd>

      <dt>CLEANLINESS & RECYCLING</dt>
      <dd>
        We kindly ask you to pay the utmost respect to the nature around you at
        the festival. Please leave no traces behind, keep the site clean, and
        separate your rubbish as the ABR team have made special arrangements for
        recycling after the festival.{' '}
      </dd>

      <dt>LITTER & DESIGNATED BINS</dt>
      <dd>
        On-site bins will be clearly labelled. Please throw all litter in the
        designated bins, and not behind the trees, in the forest or anywhere
        else. Bins will be located all around the festival grounds, with
        distinct labels for rubbish separation. Please take special care to
        throw your cigarette butts in the designated bins and NOT on the
        beautiful festival grounds.
      </dd>

      <dt>DRINKING WITHOUT WASTE</dt>
      <dd>
        In an effort to minimize waste, reusable collectible branded cups (40cl)
        will be available at the festival for 1 euro.
      </dd>
    </dl>
  </section>
)
