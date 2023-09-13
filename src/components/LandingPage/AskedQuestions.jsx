/* eslint-disable react/no-unknown-property */
import { Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon } from '@chakra-ui/react'
function AskedQuestions() {
    return (
        <div className='mt-12 mx-auto p-4  max-w-screen-xl mb-12'>
            <h3 className="text-center text-4xl mb-4 text-gray-700 font-bold">Frequently asked questions</h3>

            <Accordion className='w-full' allowMultiple>
                <AccordionItem className='border rounded-2xl border-gray-200 py-[25px] mt-6 shadow-lg'>
                    <h2>
                        <AccordionButton className='flex justify-between'>
                            <span className='text-left ml-5 font-normal text-lg text-gray-600 ' flex='1' textAlign='left'>
                                How are we different from other Healthcare providers?
                            </span>
                            <AccordionIcon className='text-left !text-navy-900 mr-4' />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel className='text-left text-gray-600 ml-5 text-medium mt-2 !text-navy-900 ' pb={4}>
                        Paperplane offers the doctor, the ability to establish their own brand and attract new patients via a variety of channels, including their website, organic search results on Google Search (Via Google My Business), advertisements on a variety of social media platforms, along with WhatsApp Marketing.
                    </AccordionPanel>
                </AccordionItem>

                {" "}

                <AccordionItem className='border rounded-2xl border-gray-200 py-[25px] mt-6 shadow-lg'>
                    <h2>
                        <AccordionButton className='flex justify-between'>
                            <span className='text-left ml-5 font-normal text-lg text-gray-600 ' flex='1' textAlign='left'>
                                How are we different from other Healthcare providers?
                            </span>
                            <AccordionIcon className='text-left !text-navy-900 mr-4' />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel className='text-left text-gray-600 ml-5 text-medium mt-2 !text-navy-900 ' pb={4}>
                        Paperplane offers the doctor, the ability to establish their own brand and attract new patients via a variety of channels, including their website, organic search results on Google Search (Via Google My Business), advertisements on a variety of social media platforms, along with WhatsApp Marketing.
                    </AccordionPanel>
                </AccordionItem>

                <AccordionItem className='border rounded-2xl border-gray-200 py-[25px] mt-6 shadow-lg'>
                    <h2>
                        <AccordionButton className='flex justify-between'>
                            <span className='text-left ml-5 font-normal text-lg text-gray-600 ' flex='1' textAlign='left'>
                                How are we different from other Healthcare providers?
                            </span>
                            <AccordionIcon className='text-left !text-navy-900 mr-4' />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel className='text-left text-gray-600 ml-5 text-medium mt-2 !text-navy-900 ' pb={4}>
                        Paperplane offers the doctor, the ability to establish their own brand and attract new patients via a variety of channels, including their website, organic search results on Google Search (Via Google My Business), advertisements on a variety of social media platforms, along with WhatsApp Marketing.
                    </AccordionPanel>
                </AccordionItem>


            </Accordion>
        </div>
    )
}

export default AskedQuestions