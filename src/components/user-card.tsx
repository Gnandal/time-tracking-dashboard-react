import imageJeremy from '/assets/images/image-jeremy.png'


export const UserCard = () => {
    return (
        <div class="w-full lg:h-4/6 bg-desaturated-blue py-10 px-6 rounded-lg shadow">
          <div class="flex lg:flex-col flex-row gap-5 items-start lg:pb-10">
            <img class="w-16 h-16 mb-3 rounded-full border-white border-2 shadow-lg" src={imageJeremy} alt="Jeremy image" />
            <div class='text-left'>
              <span class="text-sm text-pale-blue">Report for</span>
              <h5 class="mb-1 lg:text-5xl text-4xl font-medium text-gray-900 dark:text-white">Jeremy Robson</h5>
            </div>
          </div>
        </div>
    );
}