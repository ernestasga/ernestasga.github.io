"use client"

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faShare,
  faEnvelope,
  faLink,
  faTimes,
  faCheck
} from '@fortawesome/free-solid-svg-icons'
import {
  faLinkedin,
  faXTwitter,
  faWhatsapp,
  faTelegram
} from '@fortawesome/free-brands-svg-icons'

interface SharePlatform {
  name: string
  icon: any
  color: string
  getUrl: (url: string, title: string) => string
  windowSize?: { width: number; height: number }
}

interface ShareModalProps {
  resumeUrl: string
  userName: string
}

const ShareModal: React.FC<ShareModalProps> = ({ resumeUrl, userName }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [copied, setCopied] = useState(false)

  const shareUrl = typeof window !== 'undefined'
    ? window.location.origin + resumeUrl
    : resumeUrl
  const title = `${userName} - Resume`

  const platforms: SharePlatform[] = [
    {
      name: 'LinkedIn',
      icon: faLinkedin,
      color: '#0A66C2',
      getUrl: (url) => `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
      windowSize: { width: 600, height: 600 }
    },
    {
      name: 'Twitter',
      icon: faXTwitter,
      color: '#000000',
      getUrl: (url, title) => `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`,
      windowSize: { width: 600, height: 600 }
    },
    {
      name: 'WhatsApp',
      icon: faWhatsapp,
      color: '#25D366',
      getUrl: (url, title) => `https://wa.me/?text=${encodeURIComponent(title + ' ' + url)}`,
      windowSize: { width: 500, height: 600 }
    },
    {
      name: 'Telegram',
      icon: faTelegram,
      color: '#26A5E4',
      getUrl: (url, title) => `https://telegram.me/share/url?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`,
      windowSize: { width: 500, height: 600 }
    },
    {
      name: 'Email',
      icon: faEnvelope,
      color: '#EA4335',
      getUrl: (url, title) => `mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent('Check out my resume:\n\n' + url)}`,
    }
  ]

  const handleShare = (platform: SharePlatform) => {
    const url = platform.getUrl(shareUrl, title)

    if (platform.name === 'Email') {
      window.location.href = url
    } else if (platform.windowSize) {
      openPopup(url, platform.windowSize.width, platform.windowSize.height)
    } else {
      window.open(url, '_blank', 'noopener,noreferrer')
    }
  }

  const openPopup = (url: string, width: number, height: number) => {
    const left = (window.innerWidth - width) / 2 + window.screenX
    const top = (window.innerHeight - height) / 2 + window.screenY

    window.open(
      url,
      '_blank',
      `width=${width},height=${height},left=${left},top=${top},resizable=yes,scrollbars=yes,noopener,noreferrer`
    )
  }

  const handleCopyLink = async () => {
    await navigator.clipboard.writeText(shareUrl)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const handleWebShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: title,
          text: 'Check out my resume!',
          url: shareUrl,
        })
      } catch (err) {
        // User cancelled or error
      }
    }
  }

  return (
    <>
      <motion.button
        onClick={() => setIsOpen(true)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 transition-all"
      >
        <FontAwesomeIcon icon={faShare} style={{ color: '#8b5cf6' }} />
        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
          Share
        </span>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[10000]"
            />

            {/* Modal */}
            <div className="fixed inset-0 z-[10001] flex items-center justify-center p-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ type: "spring", duration: 0.5 }}
                className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-800 max-w-md w-full overflow-hidden"
              >
                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-800">
                  <h3 className="text-xl font-bold gradient-text">
                    Share Resume
                  </h3>
                  <motion.button
                    onClick={() => setIsOpen(false)}
                    whileHover={{ scale: 1.1, rotate: 90 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-600 dark:text-gray-400 transition-colors"
                  >
                    <FontAwesomeIcon icon={faTimes} />
                  </motion.button>
                </div>

                {/* Share Options Grid */}
                <div className="p-6">
                  <div className="grid grid-cols-3 gap-4 mb-4">
                    {platforms.map((platform, index) => (
                      <motion.button
                        key={platform.name}
                        onClick={() => handleShare(platform)}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.05 }}
                        whileHover={{ scale: 1.1, y: -5 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex flex-col items-center gap-3 p-4 rounded-xl bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all hover:shadow-lg"
                      >
                        <FontAwesomeIcon
                          icon={platform.icon}
                          className="text-3xl"
                          style={{ color: platform.color }}
                        />
                        <span className="text-xs font-semibold text-gray-700 dark:text-gray-300">
                          {platform.name}
                        </span>
                      </motion.button>
                    ))}

                    {/* Copy Link Button */}
                    <motion.button
                      onClick={handleCopyLink}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: platforms.length * 0.05 }}
                      whileHover={{ scale: 1.1, y: -5 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex flex-col items-center gap-3 p-4 rounded-xl bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all hover:shadow-lg"
                    >
                      <FontAwesomeIcon
                        icon={copied ? faCheck : faLink}
                        className="text-3xl"
                        style={{ color: copied ? '#10b981' : '#6366f1' }}
                      />
                      <span className="text-xs font-semibold text-gray-700 dark:text-gray-300">
                        {copied ? 'Copied!' : 'Copy Link'}
                      </span>
                    </motion.button>
                  </div>

                  {/* Web Share API Fallback (if available) */}
                  {typeof navigator !== 'undefined' && typeof navigator.share !== 'undefined' && (
                    <motion.button
                      onClick={handleWebShare}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: (platforms.length + 1) * 0.05 }}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full flex items-center justify-center gap-3 p-3 rounded-xl bg-gradient-to-r from-primary-600 to-secondary-600 hover:from-primary-700 hover:to-secondary-700 text-white font-semibold transition-all shadow-lg hover:shadow-xl"
                    >
                      <FontAwesomeIcon icon={faShare} />
                      <span className="text-sm">More Options</span>
                    </motion.button>
                  )}
                </div>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

export default ShareModal
